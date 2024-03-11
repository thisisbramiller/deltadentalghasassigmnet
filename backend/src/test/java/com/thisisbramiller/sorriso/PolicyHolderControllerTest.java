package com.thisisbramiller.sorriso;
import com.thisisbramiller.sorriso.controller.PolicyHolderController;
import com.thisisbramiller.sorriso.model.PolicyHolder;
import com.thisisbramiller.sorriso.repository.PolicyHolderRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class PolicyHolderControllerTest {

    @Mock
    private PolicyHolderRepository policyHolderRepository;

    @InjectMocks
    private PolicyHolderController policyHolderController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreatePolicyHolder() {
        PolicyHolder policyHolder = new PolicyHolder();
        when(policyHolderRepository.save(policyHolder)).thenReturn(policyHolder);

        PolicyHolder createdPolicyHolder = policyHolderController.create(policyHolder);

        assertEquals(policyHolder, createdPolicyHolder);
        verify(policyHolderRepository, times(1)).save(policyHolder);
    }

    @Test
    void testGetAllPolicyHolders() {
        PolicyHolder policyHolder1 = new PolicyHolder();
        PolicyHolder policyHolder2 = new PolicyHolder();
        List<PolicyHolder> policyHolders = Arrays.asList(policyHolder1, policyHolder2);
        when(policyHolderRepository.findAll()).thenReturn(policyHolders);

        List<PolicyHolder> allPolicyHolders = policyHolderController.getAllPolicyHolders();

        assertEquals(policyHolders, allPolicyHolders);
        verify(policyHolderRepository, times(1)).findAll();
    }

    @Test
    void testFindOneById() {
        String id = "1";
        PolicyHolder policyHolder = new PolicyHolder();
        when(policyHolderRepository.findById(id)).thenReturn(Optional.of(policyHolder));

        Optional<PolicyHolder> foundPolicyHolder = policyHolderController.findOneById(id);

        assertEquals(Optional.of(policyHolder), foundPolicyHolder);
        verify(policyHolderRepository, times(1)).findById(id);
    }

    @Test
    void testUpdatePolicyHolder() {
        PolicyHolder policyHolder = new PolicyHolder();
        when(policyHolderRepository.save(policyHolder)).thenReturn(policyHolder);

        PolicyHolder updatedPolicyHolder = policyHolderController.update(policyHolder);

        assertEquals(policyHolder, updatedPolicyHolder);
        verify(policyHolderRepository, times(1)).save(policyHolder);
    }

    @Test
    void testDeletePolicyHolder() {
        String id = "1";

        policyHolderController.deleteById(id);

        verify(policyHolderRepository, times(1)).deleteById(id);
    }
}