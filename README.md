# Lab 8 - Starter
### Moises Ruiz
1. The automated tests should be within a Github action that runs whenever code is pushed because it would be too repetetive to run them manually and we shouldn't wait until the end to start testing.
2. No, unit testing would be better suited to check if a function is returning the correct output. An end to end test would perform too many unnesecary actions.
3. No, testing the "message" feature of a messaging application would ideally use end to end testing. The "message" feautre is such a big part of the app and it would use many parts of the code, not just one. This test will not execute quickly.
4. Yes, the "max message length" is just a small part of the messaging application and it likely will not be affected by non-related unit tests. This test is quick.
