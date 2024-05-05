#!/usr/bin/env bash

mongosh --host "mongodb1:27017" --eval '
  rs.initiate({
    _id: "platform",
    version: 1,
    members: [
      {
        _id: 0,
        host: "mongodb1:27017",
        priority: 3
      },
      {
        _id: 1,
        host: "mongodb2:27018",
        priority: 2
      },
      {
        _id: 2,
        host: "mongodb3:27019",
        priority: 1
      }
    ]
  });

  rs.status();
'
