package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//import org.apache.commons.io.filefilter.TrueFileFilter;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="src/main/java/Features/tagging.feature",
        glue={"StepDefinitions"}, //the path of the step definition files
        format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
        monochrome = true, //display the console output in a proper readable format
        strict = true, //it will check if any step is not defined in step definition file
        dryRun = false, //to check the mapping is proper between feature file and step def file
        //tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}
        tags = {"@End2End" , "@SmokeTest"}
//        		tags = {"@SmokeTest"}
)
public class TestRunner {


}

//OR and And Operator used in Tags -> CucumberOptions
//ORed : tags = {"@SmokeTest , @RegressionTest , @End2End"}
//ANDed : tags = {"@SmokeTest" , "@RegressionTest" , "@End2End"}