<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login With Dynamic Usernames</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>ff5068af-f40d-4116-a99c-9a1a292b768a</testSuiteGuid>
   <testCaseLink>
      <guid>ad591fc5-6be0-42a7-afbb-f7f9d6fdef46</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>197fbc25-ae95-4483-b112-38a04ded35b4</id>
         <masked>false</masked>
         <name>username</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/Sauce Demo/Login User/TC999 - Login with dynamic usernames (test)</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>12ad575c-2eba-4051-b007-a9a3f69937fd</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Sauce Demo/List Usernames</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>12ad575c-2eba-4051-b007-a9a3f69937fd</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>197fbc25-ae95-4483-b112-38a04ded35b4</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>12ad575c-2eba-4051-b007-a9a3f69937fd</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>2024643c-22c9-4a78-b4df-3d5ba0c58edf</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
