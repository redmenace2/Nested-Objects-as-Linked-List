# Nested-Objects-as-Linked-List

I hate nested objects. So I did a bunch of exercise creating them dynamically in React Typescript.

The form of nested structure is : {"D":{"C":{"B":{"A"}}}}}} 

The actual code for nesting is simple. It simply recurse state variables using  a recursive type. The keys for the object using just string type entered through an input field.

I realised the nested objects have similar structure, in terms of stack memory usage, to linked list. So I also added somw functionality for  adding and deleting layers of the nested object as one would add or delete list entries.

I also made a code that makes a binary tree in a similar manner. The outputted object looks like  {A":{"A1":{"A21":{}, "A22":{}},"B1":{"B2":{}, "B22":{}}}} and so on. The code, I hate it. It's clunky and traversing through the objects is a real bastard.

I have also made dynamic regressive nesting which requires a slightly more laborious method. The output looks like: {"A":{"B":{"C":{"D"}}}}}}. 

Whereas progressive nesting nests the earlier object inside the newer object i.e. {"A":{}} -> {"B":{"A":{}}  regressive nesting nests new objects inside he previous objects i.e. {"A":{}} -> {"A":{"B":{}} I also hate this code.

The style sheet for the code is garbage also.

 
