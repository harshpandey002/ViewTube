const home = async (req, res) => {
  console.log({ query: req.query, body: req.body, headers: req.headers });

  try {
    res.status(201).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export default home;
