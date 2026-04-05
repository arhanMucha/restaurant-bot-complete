module.exports = async function handler(req, res) {
  res.status(200).json({
    businessName: process.env.BUSINESS_NAME || "Test Restaurant",
    businessHours: process.env.BUSINESS_HOURS || "Mon–Sun 12:00–22:00",
    businessAddress: process.env.BUSINESS_ADDRESS || "Munich",
    businessPhone: process.env.BUSINESS_PHONE || "+49 123456789"
  });
};
