import express from 'express';
import Cart from '../models/Cart.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /cart
router.post('/', protect, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (cart) {
      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
      await cart.save();
    } else {
      const newCart = new Cart({ userId: req.user.id, items: [{ productId, quantity }] });
      await newCart.save();
    }
    res.status(201).json({ message: 'Product added to cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' } , error);
  }
});

// PUT /cart/:productId
router.put('/:productId', protect, async (req, res) => {
  const { quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === req.params.productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      await cart.save();
      res.json({ message: 'Cart updated' });
    } else {
      res.status(404).json({ message: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' } , error);
  }
});

// DELETE /cart/:productId
router.delete('/:productId', protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId.toString() !== req.params.productId);
    await cart.save();
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' } , error);
  }
});

export default router;
