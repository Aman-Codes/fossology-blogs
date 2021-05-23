# Introduction

The Spasht Agent was started under the GSoC 2019 as an integration between FOSSology and [ClearlyDefined](https://clearlydefined.io/) projects.

As a first step, the implementation to pull information from ClearlyDefined is ready. In future implementations, the plan is to share clearing data from FOSSology to ClearlyDefined project. This will really boost the collaboration in compliance space.

### Usage

Since the information is pulled from ClearlyDefined server over [REST API](https://api.clearlydefined.io/api-docs/), an additional step to search the component on ClearlyDefined server is required.
1. Upload a package on FOSSology.
2. Select Spasht from top menu inside the package.
    ![Spasht View](https://i.imgur.com/V2YTOD7.png)
3. Under the **Configure** tab, search for the package in ClearlyDefined (optionally, you can do an advance search by filling out additional fields hidden under the **&vee;** next to Search button).
    ![Spasht Search](https://i.imgur.com/ihz5zoE.png)
4. Click on "Show Details" next to each result to look for additional details about the package. Once the desired package is found, click on "Select & schedule" to schedule the Spasht agent.
    ![Spasht Details](https://i.imgur.com/64pZ0Kg.png)
5. Once the scan is completed successfully, the licenses will start appearing under "License Browser" (marked as _[Sp]_) and under single file view. The agent also fetched Copyrights and will appear under "Copyrights" tab inside "Spasht" view.
    ![Spasht Licenses](https://i.imgur.com/eMkdBUc.png)
    ![Spasht Copyrights](https://i.imgur.com/QW5AD1t.png)

Another search on the package can be done by performing the search on Spasht Configure view again.

### Caveats
1. Since the agent is currently under experimental stage, the results are only shown in the UI and are not exported to any of the generated reports.
2. Not all the packages might be available on ClearlyDefined and they might not have the curation done.

#### Read more
Check out [ClearlyDefined.io](https://clearlydefined.io) for more information.

Read the [ClearlyDefined docs](https://docs.clearlydefined.io/)