public with sharing class FormTestController {
    @AuraEnabled
    public static List<Account> getListAccounts() {
        List<Account> listAccounts = [SELECT  Id, Name FROM  Account ORDER BY CreatedDate DESC LIMIT 10];
        return listAccounts;
    }
    @AuraEnabled
    public static Account saveAccount(Account acc){
        Id recordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName()
                .get('Russian').getRecordTypeId();
        acc.RecordTypeId = recordTypeId;
        upsert acc;
        return acc;
    }

}