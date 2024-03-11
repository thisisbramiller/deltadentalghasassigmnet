package com.thisisbramiller.sorriso;

import org.junit.jupiter.api.Test;

import com.thisisbramiller.sorriso.model.PolicyHolder;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PolicyHolderTest {

    @Test
    void testPolicyHolderConstructor() {
        String id = "1";
        String name = "John Doe";
        String email = "john.doe@example.com";
        String policyNumber = "1234567890";

        PolicyHolder policyHolder = new PolicyHolder(id, name, email, policyNumber);

        assertEquals(id, policyHolder.getId());
        assertEquals(name, policyHolder.getName());
        assertEquals(email, policyHolder.getEmail());
        assertEquals(policyNumber, policyHolder.getPolicyNumber());
    }

    @Test
    void testPolicyHolderToString() {
        String id = "1";
        String name = "John Doe";
        String email = "john.doe@example.com";
        String policyNumber = "1234567890";

        PolicyHolder policyHolder = new PolicyHolder(id, name, email, policyNumber);

        String expectedToString = "PolicyHolder(id=1, name=John Doe, email=john.doe@example.com, policyNumber=1234567890)";
        assertEquals(expectedToString, policyHolder.toString());
    }

    // Add more test methods as needed

}