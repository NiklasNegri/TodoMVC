using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;

namespace Selenium_Unit_Test
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = ".";
        private EdgeDriver browser;
        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            browser.Url = "https://niklasnegri.github.io";
        }
        // L�gg till en anteckning och bekr�fta att den visas p� sidan.
        [TestMethod]
        public void AddItem()
        {
            string item = "abc123";
            var inputElement = browser.FindElementByClassName("new-todo-input");
            inputElement.SendKeys(item);
            inputElement.SendKeys(Keys.Enter);

            var todoList = browser.FindElementByClassName("todo-list");
            var todoText = todoList.FindElement(By.CssSelector("li p")).Text;

            Assert.AreEqual(item, todoText);
        }
        // L�gg till en anteckning och bekr�fta att sidan visar "1 item left". Kryssa sedan i anteckningen och bekr�fta att sidan visar "0 items left".
        [TestMethod]
        public void AddTwoItems()
        {
            AddItem();
            var itemsLeft = browser.FindElementByClassName("items-left").Text;
            string s = "1 item left";
            Assert.AreEqual(itemsLeft, s);

            var todoList = browser.FindElementByClassName("todo-list");
            var checkBox = todoList.FindElement(By.CssSelector("input"));
            checkBox.Click();

            itemsLeft = browser.FindElementByClassName("items-left").Text;
            s = "0 items left";

            Assert.AreEqual(itemsLeft, s);
        }
        // L�gg till 3 anteckningar, kryssa i en av dem och bekr�fta att sidan visar "2 items left".
        [TestMethod]
        public void AddThreeItems()
        {
            AddItem();
            AddItem();
            AddItem();

            var todoList = browser.FindElementByClassName("todo-list");
            var checkBox = todoList.FindElement(By.CssSelector("input"));
            checkBox.Click();
            var itemsLeft = browser.FindElementByClassName("items-left").Text;
            string s = "2 items left";

            Assert.AreEqual(itemsLeft, s);
        }
        [TestCleanup]
        public void EdgeDriverCleanup()
        {
            browser.Quit();
        }
    }
}
