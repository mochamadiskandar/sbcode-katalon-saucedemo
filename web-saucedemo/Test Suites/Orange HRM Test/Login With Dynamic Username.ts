<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login With Dynamic Username</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>a0449b0d-6771-43ff-b704-218634d38f84</testSuiteGuid>
   <testCaseLink>
      <guid>2d2c5e3e-a5e6-43f8-a968-5b4f69f847b8</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>439333d2-93e7-4d08-9231-3a2943e94f34</id>
         <masked>false</masked>
         <name>username</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/OrangeHRM Test/TC001-Login</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>4aaaa8a7-bcd6-4ab6-89c4-e33fcd49eec9</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Orange HRM Test/List Usernames</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>4aaaa8a7-bcd6-4ab6-89c4-e33fcd49eec9</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>439333d2-93e7-4d08-9231-3a2943e94f34</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>4aaaa8a7-bcd6-4ab6-89c4-e33fcd49eec9</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>4e91e665-bf79-4a1e-8d27-85df932d4859</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
