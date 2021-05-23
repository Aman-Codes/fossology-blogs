## The ECC Agent

The ECC agent should scan for relevant phrases w.r.t. to export control and customs issues based on regular expressions. There could be separate agents that allow for finding results w.r.t. specific topic, if required.

#### GUI Spec

There was a GUI spec for this at the early development, when it came to design an efficient clearing user interface.

At further evolution of the agent, it turned out that some general interface for copyrights and ECC statements (and maybe another agent) is beneficial, which was implemented as such.

#### Clearing Result:

There should be clearing "titles" for the clearing result.

For ECC, this would be called "Identified export restriction”. However, which are these? - Input is appreciated here.

For example: The clearing experts identifies a statement being a TSU statement or reference. Then, the result could be labelled TSU reference. In "the not shown GUI Mockup", we can see already some proposals for ECC clearing results. What would be other clearing results for the report? The list requires completion.

#### Clearing Result for ECC

* US GAPP1
* ?

#### Keywords Relevant for Implementation 

All words are meant to be case insensitive (no matter if large or small caps). The list of keywords requires review, otherwise a lot of false positives are found.

Acronyms in the field of ECC:
- ECCN
- TSU
- ECC
- EAR (difficult, also used in Java, so maybe skip this at some time)

Direct Export 7 Customs Terms:
- "export control" (obviously export alone is difficult...)
- customs
- "foreign Trade Regulations"
- "foreign trade"
- "commerce control"
- "country of origin"
- "export administration"

Related Export / Customs Terms:
- "krypt" / "crypt"
- "information security"
- encryption
- "propulsion systems"
- avionics
- "dual use"

Further Keywords candidates : 
hash, SSH, SSL, TLS, PGP, S/MIME, ECCN, 5D99, EAR99

Special Keywords hash: 
MD2, MD5, MD4, HMAC, SHA, CRC,  NTLM

Keywords crypto:
DES, 3DES, DEA, AES, RSA, IDEA, Diffie-Hellman, Blowfish, Serpent, Elliptic Curve Cryptography (ECC)

#### Sources 

http://www.bis.doc.gov/index.php/licensing/commerce-control-list-classification/export-control-classification-number-eccn