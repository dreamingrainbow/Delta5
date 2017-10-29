# README #

This is a simple cypher program, based off the famous Caesar cipher. To make it a little more secure I adding a 5 step incremented hash using the passphrase.

### Usage ###
let passPhrase = 'banana';
let message = 'A cup of tea for you sir?';
r = delta5(passPhrase, message );
r = delta5(passPhrase, r, 'd');

### Requires a min of 6 Character Passphrase ###