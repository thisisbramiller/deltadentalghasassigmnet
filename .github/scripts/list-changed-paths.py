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

lines = list(open("./.github/scripts/diff.txt")).readlines()
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

