package com.thisisbramiller.sorriso.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Represents a policy holder in the insurance system.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "PolicyHolder")
public class PolicyHolder {
    
    @Id
    private String id;
    private String name;
    private String email;
    private String policyNumber;

}
