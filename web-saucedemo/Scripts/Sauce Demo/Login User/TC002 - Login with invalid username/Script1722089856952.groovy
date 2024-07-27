import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.urlLogin)

WebUI.waitForPageLoad(GlobalVariable.waitPageTimeout)

WebUI.waitForElementPresent(findTestObject('Sauce Demo/Login page/login_header'), GlobalVariable.waitElementTimeout)

WebUI.setText(findTestObject('Sauce Demo/Login page/input_username'), 'random')

WebUI.setText(findTestObject('Sauce Demo/Login page/input_password'), 'random')

WebUI.waitForElementClickable(findTestObject('Sauce Demo/Login page/button_login'), GlobalVariable.waitElementTimeout)

WebUI.click(findTestObject('Sauce Demo/Login page/button_login'))

WebUI.verifyElementVisible(findTestObject('Sauce Demo/Login page/textPopupLoginIsNotMatch'))

WebUI.closeBrowser()

