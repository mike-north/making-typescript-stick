#!/bin/sh
echo "Building jquery-clone..."
(cd challenges/jquery-clone && yarn test)
echo "Testing async-communicator..."
(cd challenges/async-communicator && yarn test)
echo "Testing data-layer..."
(cd challenges/data-layer && yarn test)
