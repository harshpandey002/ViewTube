const home = async (req, res) => {
  try {
    res.status(201).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export default home;
