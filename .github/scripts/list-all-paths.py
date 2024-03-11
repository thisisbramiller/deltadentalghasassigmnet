#!/usr/bin/env python3

import glob
import json
import os
from html.parser import HTMLParser
from genericpath import isdir

languages = {
    "c_and_cplus": [".cpp", ".c++", ".cxx", ".hpp", ".hh", ".h++", ".hxx", ".c," ".cc", ".h"],
    "csharp": [".sln", ".csproj", ".cs", ".cshtml", ".xaml"],
    "golang": [".go"],
    "java": [".java"],
    "javascript": [".js", ".jsx", ".mjs", ".es", ".es6", ".vue", ".hbs", ".ejs", ".njk", ".json", ".raml"],
    "javascript_html": [".htm", ".html", ".xhtm", ".xhtml", ".xml"],
    "python_lang": [".py"],
    "ruby": [".rb", ".erb", ".gemspec", "Gemfile"],
    "typescript": [".ts", ".tsx", ".mts", ".cts"],
}

outlines = dict()
outlines["include"] = set()

class htmlparser(HTMLParser):

    def __init__(self) -> None:
        super().__init__()
        self.reset()
        self.NEWTAGS = []
        self.NEWATTRS = []
        self.HTMLDATA = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.NEWTAGS.append(tag)
        self.NEWATTRS.append(attrs)

    def handle_data(self, data: str) -> None:
        self.HTMLDATA.append(data)

    def clean(self) -> None:
        self.NEWTAGS = []
        self.NEWATTRS = []
        self.HTMLDATA = []

def serialize_sets(obj):
    if isinstance(obj, set):
        l = list()
        for item in obj:
            if isinstance(item, tuple):
                l.append(dict((x,y) for x,y in item))
        return 1
    
def find_in_list(list: list, string: str) -> bool:
    for i in list:
        if string.strip().endswith(i):
            return True
    return False

def check_html_for_js(html: str) -> bool:
    parser = htmlparser()
    buffer = open(html, "r").read()
    parser.feed(buffer)
    for i in range(len(parser.NEWTAGS)):
        if parser.NEWTAGS[i] == "script":
            for j in range(len(parser.NEWATTRS[i])):
                if parser.NEWATTRS[i][j][0] == "type":
                    if find_in_list(languages["javascript"], parser.NEWATTRS[i][j][1]):
                        return True
    return False

for line in glob.glob('**', recursive=True):
    path = line.split('/')[0]
    if find_in_list(languages["c_and_cplus"], line) and (os.path.isdir(path)):
        outlines["include"].add(tuple(dict({"target-dir": path, "languages": "cpp"}).items()))
    if find_in_list(languages["csharp"], line) and (os.path.isdir(path)):
        outlines["include"].add(tuple(dict({"target-dir": path, "languages": "csharp"}).items()))
    if find_in_list(languages["golang"], line) and (os.path.isdir(path)): 
        outlines["include"].add(tuple(dict({"target-dir": path, "languages": "golang"}).items()))
    if find_in_list(languages["java"], line) and (os.path.isdir(path)): 
        outlines["include"].add(tuple(dict({"target-dir": path, "languages": "java"}).items()))
    if find_in_list(languages["javascript"], line) and (os.path.isdir(path)):
        outlines["include"].add(tuple(dict({"target-dir": path, "languages": "javascript"}).items()))
    if find_in_list(languages["javascript_html"], line) and (os.path.isdir(path)):
        if check_html_for_js(path):
            outlines["include"].add(tuple(dict({"target-dir": path, "languages": "javascript"}).items()))
    if find_in_list(languages["python_lang"], line) and (os.path.isdir(path)):
        outlines["include"].add(tuple(dict({"target-dir": path, "languages": "python"}).items()))
    if find_in_list(languages["ruby"], line) and (os.path.isdir(path)):
        outlines["include"].add(tuple(dict({"target-dir": path, "languages": "ruby"}).items()))
    if find_in_list(languages["typescript"], line) and (os.path.isdir(path)):
        outlines["include"].add(tuple(dict({"target-dir": path, "languages": "typescript"}).items()))

print(json.dumps(outlines, default=serialize_sets))