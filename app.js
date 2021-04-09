(function(){
    let result = null;
    const scriptBlock = document.createElement("script");
    scriptBlock.src = "https://cdn.jsdelivr.net/gh/tgregan90/adt/lib.js";
    document.body.insertAdjacentElement("beforeend",scriptBlock);

function runScript(){
    setTimeout(() => {
        result = axs.Audit.run();
        printResults();
    }, 1000);
}

function printResults(){
    let list = document.createElement("ul");
    list.className = "AccessibilityResults"
    for(test of result){
        let li = document.createElement("li");
        let resultNode = `<span>Result: <span class="result testResults-${test.result}">${test.result} </span></span>`;
        let ruleNode = `<span>Rule: <span class="rule testName-${test.rule.name}">${test.rule.name}</span></span>`;
        li.insertAdjacentHTML("beforeend", ruleNode);
        li.insertAdjacentHTML("beforeend", resultNode);
        list.appendChild(li);
    }
    document.body.insertAdjacentElement("beforeend",list);
}

runScript();
})();
