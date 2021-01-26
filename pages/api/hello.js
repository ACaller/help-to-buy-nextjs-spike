// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const names = [
  { name: "John Doe" },
  { name: "Jane Doe" },
  { name: "Jasmine Doe" },
  { name: "Jake Doe" },
  { name: "Jacob Doe" },
  { name: "Jamal Doe" },
  { name: "Johnny Doe" },
  { name: "Janice Doe" }
];

export default async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  res.statusCode = 200;
  res.json(names[req.query.count]);
};
