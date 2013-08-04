using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ujianjshtml.Controllers
{
    public class TestsController : Controller
    {
        

        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Eagletest()
        {
            return View();
        }

        public ActionResult Breezetest()
        {
            return View();
        }

       
        /// <summary>
        /// http://underscorejs.org/test/
        /// </summary>
        /// <returns></returns>
        public  ActionResult Underscoretest()
        {
            return View();
        }

        /// <summary>
        /// plural sight - Fix common jquery bugs
        /// G:\program2\jshtml\pluralsight\fixing-common-jquery-bugs
        /// </summary>
        /// <returns></returns>
        public ActionResult PsFixCommonJqBugs()
        {
            return View();
        }

        /// <summary>
        ///  ref: html5 cookbook
        /// </summary>
        /// <returns></returns>
        public ActionResult Htmltest()
        {
            return View();
        }


        /// <summary>
        /// plural sight - Testing Javascript
        /// G:\program2\jshtml\pluralsight\testing-javascript\materials\6-testing-javascript-m6-sinon-exercise-files\after
        /// </summary>
        /// <returns></returns>
        public ActionResult Sinontest()
        {
            return View();
        }


    }
}
