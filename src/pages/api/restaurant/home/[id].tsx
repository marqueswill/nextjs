import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const restaurantId = req.query.id;

  switch (req.method) {
    // case "CREATE": {
    //   await prisma.restaurant.create({});

    // }

    case "GET": {
      try {
        const restaurant = await prisma.restaurant.findUnique({
          where: { id: Number(restaurantId) },
        });

        if (restaurant) {
          res.status(200).json(restaurant);
        } else {
          const message: string = "Restaurant not found";
          res.status(400).json(message);
        }
      } catch (error) {
        const message: string = "Error trying to acess the database";
        res.status(500).json(message);
      }
    }

    case "DELETE": {
      try {
        const deleteRestaurant = await prisma.restaurant.delete({
          where: { id: Number(restaurantId) },
        });

        if (deleteRestaurant) {
          res.status(200).json(deleteRestaurant);
        } else {
          const message: string = "Restaurant not found";
          res.status(400).json(message);
        }
      } catch (error) {
        const message: string = "Error trying to acess the database";
        res.status(500).json(message);
      }
    }

    default:
      throw new Error(`The HTTP ${req.method} method is not supported`);
  }
  //   const restaurant = await prisma.restaurant.findUnique({
  // where: { id: Number(restaurantId) },
  //   });
  //
  //   return res.json(restaurant)
}
