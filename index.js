import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.get('/prefix/:a', (c) => c.json({ a: c.req.param('a') }));
app.get('/:a', (c) => c.json({ a: c.req.param('a') }));
app.get('/:b/:a', (c) => c.json({ a: c.req.param('a'), b: c.req.param('b') }));

serve(app);
