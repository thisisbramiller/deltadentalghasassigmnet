package com.thisisbramiller.sorriso.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thisisbramiller.sorriso.model.PolicyHolder;
import com.thisisbramiller.sorriso.repository.PolicyHolderRepository;


@RestController
@CrossOrigin
@RequestMapping("/api/v1/policyholder")
public class PolicyHolderController {

    @Autowired
    private PolicyHolderRepository policyHolderRepository;
  
    
    @PostMapping("/create")
    public PolicyHolder create(@RequestBody PolicyHolder policyHolder) {
        return policyHolderRepository.save(policyHolder);
        
    }

    @GetMapping("/all")
    public List<PolicyHolder> getAllPolicyHolders() {
        return policyHolderRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Optional<PolicyHolder> findOneById(@PathVariable String id) {
        return policyHolderRepository.findById(id);
    }

    @PutMapping("/update")
    public PolicyHolder update(@RequestBody PolicyHolder policyHolder) {
        return policyHolderRepository.save(policyHolder);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable String id) {
        policyHolderRepository.deleteById(id);
    }
            
}
