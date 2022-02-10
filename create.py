import pyarrow as pa

BATCH_SIZE = 1000
NUM_BATCHES = 100

schema = pa.schema([pa.field('nums', pa.int32())])

with pa.OSFile('pyarrow.arrow', 'wb') as sink:
   with pa.ipc.new_file(sink, schema) as writer:
      for row in range(NUM_BATCHES):
            batch = pa.record_batch([pa.array(range(BATCH_SIZE), type=pa.int32())], schema)
            writer.write(batch)