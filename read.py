import pyarrow as pa

print('Reading arrow ipc file produced by pyarrow...')
with open('pyarrow.arrow', 'rb') as f:
    with pa.ipc.open_file(f) as reader:
        df = reader.read_pandas()
        print(df.head())

print('Reading arrow ipc file produced by js arrow...')
with open('jsarrow.arrow', 'rb') as f:
    with pa.ipc.open_file(f) as reader:
        df = reader.read_pandas()
        print(df.head())
