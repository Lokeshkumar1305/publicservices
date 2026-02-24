import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-merchant-onboarding',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    templateUrl: './merchant-onboarding.component.html',
    styleUrl: './merchant-onboarding.component.scss'
})
export class MerchantOnboardingComponent {
    // Scenario Toggle (for demonstration, could be state-driven)
    activeScenario: 1 | 2 = 1;

    // Scenario 1 & 2 Base Fields
    tenantId: string = 'TEN-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    businessName: string = '';
    displayName: string = '';
    tenantType: string = '';
    businessCategory: string = '';
    // subscriptionPlan: string = 'PRO';

    // Branding
    logoUrl: string = '';
    logoPreview: string | null = null;
    primaryColor: string = '#4F46E5';
    secondaryColor: string = '#111827';
    customDomain: string = '';

    // Modules
    selectedModules: string[] = [];

    // State
    isSaved: boolean = false;
    showKeys: boolean = false;
    secretKey: string = '';
    accessKey: string = '';
    selectedTab: string = 'proserv';

    // Business Details (Scenario 2)
    legalName: string = '';
    incorporationCountry: string = '';
    establishmentEmail: string = '';
    pincode: string = '';
    state: string = '';
    city: string = '';
    panNumber: string = '';
    gstNumber: string = '';

    // Personal Details (Scenario 2)
    applicantFirstName: string = '';
    applicantLastName: string = '';
    applicantEmail: string = '';
    applicantMobile: string = '';
    ownerGender: string = '';
    ownerDOB: string = '';

    // Bank Details (Scenario 2)
    bankAccountName: string = '';
    bankAccountNumber: string = '';
    bankBranchCode: string = '';
    bankSettlementCurrency: string = '';

    // Options
    tenantTypes = ['INDIVIDUAL', 'FIRM', 'EVENT'];
    businessCategories = ['LAW', 'EVENT', 'CONSULTING', 'PAINTER', 'CUSTOM'];
    // subscriptionPlans = ['BASIC', 'PRO', 'ENTERPRISE'];

    availableModules = [
        { id: 'UAM', name: 'Identity & Access (UAM)' },
        { id: 'BILLING', name: 'Invoicing & Billing' },
        { id: 'NOTIFICATION', name: 'Notification Service' },
        { id: 'REPORTS', name: 'Advanced Reporting' },
        { id: 'CASE_MANAGEMENT', name: 'Case Management' },
        { id: 'ACCOUNTING', name: 'Accounting Recon' }
    ];

    // Scenario 2 Payload (provided by user)
    scenario2Data = {
        "messageID": "/api/application/save",
        "requestType": "UPDATE",
        "doesInputHaveEncryptedData": true,
        "updEncryptionIndex": "699be3d1d167d46979c5d129",
        "updEncryptionPubVal": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkFuTWwkI11YyWlfL/HJ0sdrgzlUOorzrNEdcRDXmiDePAZW/LIGnHb+CKXgnOs0TG4gPGP6dqiJAr2PJjp6JrsVu2nqnUftKwB+zN+ZIG8iaVL8+mTFpubOWKBsjeqK1XIh5emKhwxbMTSS0CRWDkaNQV4v63a5ljDKq5eHIYldG79ezpOOaMwcx41/vu/a7oopKHbB9SZAIzhx78XMt6L6doiAPnWGVWopct/YFIZ00dwRFBR1Drr357wn3NAtS09LgbF4rWqdwK0+G1lni3AqnBONSuuYy/NtKCIU/DxAgCXMDDONmffODbb89d/yjVkpGN0oBH0t8Z3NxMYqVsQIDAQAB",
        "object": {
            "id": "699be3cfd167d46979c5d127",
            "applicationNumber": "364297491983720179",
            "applicationStatus": "SAVED",
            "applicantName": {
                "firstName": "Naga",
                "lastName": "raju"
            }
        }
    };

    onSave() {
        if (!this.businessName || !this.displayName) {
            alert('Please fill in required fields');
            return;
        }
        this.isSaved = true;
        this.showKeys = true;
        console.log('Provisioning Details Saved:', this.getPayload());
    }

    onSubmit() {
        alert('Onboarding data submitted successfully!');
        console.log('Final Submission:', this.getPayload());
    }

    getPayload() {
        if (this.activeScenario === 1) {
            return {
                tenantId: this.tenantId,
                businessName: this.businessName,
                displayName: this.displayName,
                tenantType: this.tenantType,
                businessCategory: this.businessCategory,
                branding: {
                    logoUrl: this.logoUrl,
                    primaryColor: this.primaryColor,
                    secondaryColor: this.secondaryColor,
                    customDomain: this.customDomain
                },
                enabledModules: this.selectedModules,
                keys: this.showKeys ? { accessKey: this.accessKey, secretKey: this.secretKey } : null
            };
        } else {
            // Scenario 2: Complex Payload based on User Provided Structure
            return {
                ...this.scenario2Data,
                object: {
                    ...this.scenario2Data.object,
                    applicantName: {
                        firstName: this.applicantFirstName,
                        lastName: this.applicantLastName
                    },
                    applicantEmailId: this.applicantEmail,
                    mobileNumber: {
                        countryCode: "+91",
                        number: this.applicantMobile
                    },
                    establishmentDetails: {
                        legalName: this.legalName,
                        countryOfIncorporation: this.incorporationCountry,
                        establishmentEmailId: this.establishmentEmail,
                        establishmentAddress: {
                            city: this.city,
                            state: this.state,
                            pincode: this.pincode,
                            country: "India",
                            isoCountryCode: "IND",
                            countryCodeNumeric: "356"
                        }
                    },
                    firstOwnerList: {
                        ownerName: {
                            firstName: this.applicantFirstName,
                            lastName: this.applicantLastName
                        },
                        emailId: this.applicantEmail,
                        gender: this.ownerGender,
                        dateOfBirth: this.ownerDOB
                    },
                    debitAccountDetails: {
                        accountname: { firstName: this.bankAccountName },
                        accountNumber: this.bankAccountNumber,
                        branchCode: this.bankBranchCode
                    }
                }
            };
        }
    }

    onOnboardAsClient() {
        const externalUrl = 'https://merchant.testtoucanpay.in/#/auth/register';
        window.open(externalUrl, '_blank');
    }

    copyToClipboard(val: string) {
        if (!val) return;
        navigator.clipboard.writeText(val);
        alert('Copied to clipboard');
    }

    onLogoUpload(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.logoPreview = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    toggleScenario(s: 1 | 2) {
        this.activeScenario = s;
        this.isSaved = false;
        this.showKeys = s === 2; // In Scenario 2, keys/submit might be visible or handled differently
    }
}
