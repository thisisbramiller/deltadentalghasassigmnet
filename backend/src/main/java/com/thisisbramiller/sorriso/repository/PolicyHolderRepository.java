package com.thisisbramiller.sorriso.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.thisisbramiller.sorriso.model.PolicyHolder;

@Repository
public interface PolicyHolderRepository extends MongoRepository<PolicyHolder, String> {
}
