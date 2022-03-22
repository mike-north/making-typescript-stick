#!/bin/sh
echo "Building jquery-clone..."
(cd challenges/jquery-clone && yarn build)
echo "Building async-communicator..."
(cd challenges/async-communicator && yarn build)
echo "Building data-layer..."
(cd challenges/data-layer && yarn build)
