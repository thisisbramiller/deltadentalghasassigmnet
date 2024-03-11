package com.thisisbramiller.sorriso.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.thisisbramiller.sorriso.model.PolicyHolder;

/**
 * This interface represents a repository for managing policy holders in the application.
 * It extends the MongoRepository interface, providing CRUD operations for the PolicyHolder entity.
 */
@Repository
public interface PolicyHolderRepository extends MongoRepository<PolicyHolder, String> {
}
