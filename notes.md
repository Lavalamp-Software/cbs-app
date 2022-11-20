# user wants to get a pkg
cbs [i/install] [package] [--cpp/--c if both langs are supported] [otherflags]
----
sends an api req (can be curl) to nestjs api with db, returns byted files, if possible to translate bytecode in api, returns directory with ready files


# user wants to upload a package
cbs upload [pkg/???] [directory] [--c/--cpp] [otherflags]
----
converts files to one array of bytes and sends to api


