
Steps to replicate

1. Run `yarn install` to install js dependencies
2. Run `poetry install` to install python dependencies
3. Run `poetry shell` to enter into the virtualenv
4. Run `python create.py` to output a `.arrow` file from `pyarrow`
5. Run `yarn ts-node create.ts` to output a `.arrow` file from js `apache-arrow` lib
6. Run `yarn ts-node read.ts` to read both arrow files (this should work)
7. Run `python read.py` to read both arrow files (this should fail at reading the `jsarrow.arrow` file)