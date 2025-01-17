import Hospital from "../models/hospital.js";

/* THIS CONTROLLER IS FOR THE CREATING OF THE HOSPITAL */

const register_Hospital = async (req, res) => {
  const { name, address } = req.body;
  if (!req.body || Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ errors: ["Request body is missing or empty"] });
  }


  try {
    // CREATING NEW HOSPITAL 
    const hospital = new Hospital({ name, address })
    await hospital.save();

    // SENDING THE RESPOSE WITH NEW CREATED HOSPITAL 
    res.status(200).json(hospital);

  }
  catch (error) {
    //SENDING ERROR MESSAGE IF ENCOUNTER IN ABOVE CODE 
    res.status(400).send(error);
  }
}

export default register_Hospital;