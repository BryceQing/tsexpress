import {Request, Response} from 'express';
/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
  res.render("index", {});
  // res.send('respond with the user list here');
};
