$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/tagging.feature");
formatter.feature({
  "line": 1,
  "name": "Free Crm Application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 48,
  "name": "Search a deal",
  "description": "",
  "id": "free-crm-application-testing;search-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@SmokeTest"
    },
    {
      "line": 47,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "This is a search deal test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_deal_test()"
});
formatter.result({
  "duration": 118280900,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Search a docs",
  "description": "",
  "id": "free-crm-application-testing;search-a-docs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@SmokeTest"
    },
    {
      "line": 59,
      "name": "@RegressionTest"
    },
    {
      "line": 59,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "This is a search docs test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_docs_test()"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Search a forms",
  "description": "",
  "id": "free-crm-application-testing;search-a-forms",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@SmokeTest"
    },
    {
      "line": 63,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "This is a search forms test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_a_search_forms_test()"
});
formatter.result({
  "duration": 43600,
  "status": "passed"
});
});