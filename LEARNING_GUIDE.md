# To-Do App Learning Guide

Welcome to your To-Do List project! This guide will help you understand and build upon what's here.

## 📚 Learning Resources

### **HTML & CSS Basics**
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [freeCodeCamp - Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design/)

### **JavaScript Fundamentals**
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info - The Modern JavaScript Tutorial](https://javascript.info/)
- [freeCodeCamp - JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

### **Web Development Basics**
- [freeCodeCamp - Web Development for Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)

---

## 🔍 Understanding Your Code

### **index.html** - The Structure
- `<input>` - Where users type tasks
- `<button>` - Adds the task
- `<ul>` - Displays all tasks
- `<li>` - Individual task items

### **style.css** - The Design
- Makes things look pretty!
- Uses flexbox for layout
- Gradient background (purple to pink)
- Hover effects for interactivity

### **script.js** - The Brain
- `addTask()` - Creates new tasks
- `deleteTask()` - Removes tasks
- `toggleTask()` - Marks as complete/incomplete
- `localStorage` - Saves tasks to browser memory (persists even after closing!)

---

## 🚀 How to Run Your App

1. Clone your repository to your computer:
   ```bash
   git clone https://github.com/Olatunji-07123/todo-app.git
   cd todo-app
   ```

2. Open `index.html` in your web browser:
   - Right-click `index.html` → "Open with" → Your browser
   - Or drag `index.html` into your browser window

3. Start adding tasks!

---

## ✨ What Your App Can Do Right Now

✅ **Add tasks** - Type and click "Add Task" or press Enter
✅ **Check off tasks** - Click the checkbox to mark as complete
✅ **Delete tasks** - Click the "Delete" button
✅ **Saves automatically** - Tasks stay even after you close the browser!

---

## 💡 Features to Add Next

Once you're comfortable with the basics, try adding these:

### **Easy (Good for practice)**
1. **Task Counter** - Show "You have X tasks"
2. **Clear All** - Delete all tasks at once
3. **Due Dates** - Add a date picker to tasks
4. **Categories/Tags** - Organize tasks by type

### **Medium (More challenging)**
1. **Filter View** - Show only completed or incomplete tasks
2. **Task Editing** - Click to edit existing tasks
3. **Priority Levels** - Mark tasks as high/medium/low priority
4. **Search** - Find tasks by keyword

### **Hard (Advanced)**
1. **Drag & Drop** - Reorder tasks by dragging
2. **Recurring Tasks** - Daily/weekly tasks that repeat
3. **Sync with Cloud** - Save to a database (Firebase, etc.)
4. **Dark Mode** - Toggle between light and dark theme

---

## 🐛 Debugging Tips

If something doesn't work:

1. **Open Developer Tools** (Press `F12` in your browser)
2. **Check the Console** for error messages (red text = problems)
3. **Use `console.log()`** to print values and debug
   ```javascript
   console.log('This is my task:', task);
   ```
4. **Check the Application/Storage tab** to see saved tasks

---

## 📝 Next Steps

1. **Run the app** - Open `index.html` in your browser
2. **Test it out** - Add, complete, and delete some tasks
3. **Read the code** - Understand how it works
4. **Try modifying it** - Change colors, text, layout in the CSS or HTML
5. **Add a feature** - Pick one from "Features to Add Next"
6. **Commit to GitHub** - Save your changes with:
   ```bash
   git add .
   git commit -m "Your message here"
   git push
   ```

---

## 💪 Challenge Ideas

**Can you:**
1. Change the gradient colors to your favorite colors?
2. Add a counter that shows how many tasks you have?
3. Add an "Edit" button that lets you modify a task?
4. Make completed tasks appear at the bottom of the list?
5. Add a "Clear All Completed" button?

---

## ❓ Getting Help

- Search for your error on [Google](https://google.com) or [Stack Overflow](https://stackoverflow.com)
- Check [MDN Web Docs](https://developer.mozilla.org/) for reference
- Review the code comments in your files
- Ask questions on GitHub Discussions or Issues

---

## 🎉 You've Got This!

You now have a fully functional To-Do app! Use it to:
- Track your daily tasks
- Learn how web apps work
- Practice coding by adding new features
- Build confidence in your programming journey

Happy coding! 🚀