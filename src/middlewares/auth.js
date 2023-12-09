import jwt from 'jsonwebtoken';

const { JWT_SECRET_KEY } = process.env;

export function authentication(req, res, next) {
  try {
    if (req.path === '/login') {
      return next();
    }

    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Authorization header required' });
    }

    const payload = jwt.verify(authorization.split(' ')[1], JWT_SECRET_KEY);
    req.user = payload;
    return next();
  } catch (error) {
    const err = new Error('Unauthorized');
    err.status = 401;
    return next(err);
  }
}
