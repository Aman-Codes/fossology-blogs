FOSSology offers several features for managing different aspects of the Software clearing workflow, from License text management up to exporting all legal information found in the scanned source component. However, getting the most relevant information out of the Open Source text licenses like what it means in terms of **obligations**, **restrictions**, **risks** or **rights** can be a very complex and error prone task. The **"Obligations Management"** feature implemented in FOSSology can help you with this task. 

Maintaining obligations in the FOSSology system and linking them with the corresponding licenses makes it possible to export the **list of legal duties** according to the licenses found in a single component. The obligation text can be freely chosen by your legal department according to your own interpretation of the license text. In any case, getting a list of self-explanatory legal statements can save you a lot of time and effort during the clearing of your software component.

> Note: this feature is only accessible for FOSSology administrators.

# Adding obligations

Using the menu `Admin->Obligation Admin->Add Obligation` you will access this form:

[[https://user-images.githubusercontent.com/11165188/27642496-3d835ea4-5c1f-11e7-96a7-6005f2ca9535.png]]

Here is an explanation of the different fields proposed in this page:

| Field Name | Description | Options or Data type | Mandatory |
|------------|-------------|-------------------|-----------|
| Active | Is this obligation in use? | `yes` or `no` | x |
| Obligation Topic | The short name of the obligation like for example "Export list of Copyright Owners". Several obligations can shared the same short name, there is no character limitation for this field | Free text | x |
| Type of Obligation | Classification of the obligation from a legal point-of-view | `obligation`, `restriction`, `risk` or `right` | x |
| Obligation Text | The complete description text for the obligation as defined by your legal department. This text must be unique across all obligations. | Free text | x |
| Level of attention this obligation should raise in the clearing process | Depending on your interpretation of the license text, the obligation can be rated with different level of criticality, this field can help you classify the legal statements according to four colours. | `green`, `white`, `yellow` or `red` | |
| Does this obligation apply on modified source code? | Some license statement only concerns modification applied on the original version of the software. | `yes` or `no` | |
| Associated Licenses | List of licenses this obligation applies on. The most commonly used licenses share equivalent statements like for example "Redistributions in binary form must reproduce the above copyright notice" from the 2-clause BSD license. Linking common obligation texts with several relevant licenses is the key to simplify obligations management in your clearing process. | License short names used in FOSSology | x |
| Associated candidate Licenses | List of candidate licenses this obligation applies on. | License short names used in FOSSology | |
| Comment | Add any further information to this obligation. | Free text | |
| Text Updatable | Prevent obligations from being changed unexpectedly. | `yes` or `no` | x |

All obligations available in FOSSology can be visualized from the menu `Admin->Obligation Admin->Select Obligation`.

# Importing and Exporting Obligations as CSV

Managing obligations can be performed either using the UI explained in the former chapter or using CSV. 

To create a first version of the obligations table:
* enter some sample data on the page `Admin->Obligation Admin->Add Obligation`
* press the button "Add obligation" and you will be redirected to the obligations' selection page
* from the menu `Admin->Obligation Admin->Export CSV` you will have access to the export function
* use the export CSV table to fill up the data offline
* import your changes back in FOSSology using the menu `Admin->Obligation Admin->Import CSV`.

# Generate the list of Obligations for one upload component

> [Work-In-Progress]