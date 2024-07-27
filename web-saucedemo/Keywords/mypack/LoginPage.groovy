package mypack

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

public class LoginPage {

	@Keyword

	def static void loginToWeb() {
		
		WebUI.openBrowser('')
		
		WebUI.navigateToUrl(GlobalVariable.urlLogin)
		
		WebUI.waitForPageLoad(GlobalVariable.waitPageTimeout)
		
		WebUI.waitForElementPresent(findTestObject('Sauce Demo/Login page/login_header'), GlobalVariable.waitElementTimeout)
		
		WebUI.setText(findTestObject('Sauce Demo/Login page/input_username'), GlobalVariable.validUsername)
		
		WebUI.setText(findTestObject('Sauce Demo/Login page/input_password'), GlobalVariable.password)
		
		WebUI.waitForElementClickable(findTestObject('Sauce Demo/Login page/button_login'), GlobalVariable.waitElementTimeout)
		
		WebUI.click(findTestObject('Sauce Demo/Login page/button_login'))
		
		WebUI.verifyElementPresent(findTestObject('Sauce Demo/Products page/txt_productsPage_header'), GlobalVariable.waitElementTimeout)
		
	}
}
