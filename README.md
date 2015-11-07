# jquery.checkall
JQuery plugin to check all child elements like checkboxes, panels, tables row and etc. by adding highlight class.

HTML example checkbox markup
---

```html
 <label for="checkbox1">
    <input class="check-all" type="checkbox" value="option1" id="checkbox1">
    Check all
</label>
<div class="children">            
    <label for="checkbox2">
        <input class="check" type="checkbox" value="option2" id="checkbox2">
        Option 1
    </label>
    <label for="checkbox3">
        <input class="check" type="checkbox" value="option3" id="checkbox3">
        Option 2
    </label>
    <label for="checkbox4">
        <input class="check" type="checkbox" value="option4" id="checkbox4">
        Option 3
    </label>
</div>
```
Javascript
---
```javascript
$('#checkAllExample').checkAll({
    masterCheckbox: '.check-all',
    otherCheckboxes: '.check'
});
```

Table row highlight markup
---

```html
<table class="table">
    <thead>
        <tr>
            <th>
                <label for="masterCheck">
                     <input class="check-all" type="checkbox" id="masterCheck" value="option1">
                     Check All
                </label>
            </th>
            <th>Col1</th>
            <th>Col2</th>
            <th>Col3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <label for="check">
                    <input id="check" class="check" type="checkbox" value="option2">
                </label>
            </td>
            <td>Data col1</td>
            <td>Data col2</td>
            <td>Data col3</td>
        </tr>
        <tr>
            <td>
                <label for="check">
                    <input id="check1" class="check" type="checkbox" value="option3">
                </label>
            </td>
            <td>Data col1</td>
            <td>Data col2</td>
            <td>Data col3</td>
        </tr>
        <tr>
            <td>
                <label for="check">
                    <input id="check2" class="check" type="checkbox" value="option4">
                </label>
            </td>
            <td>Data col1</td>
            <td>Data col2</td>
            <td>Data col3</td>
        </tr>
    </tbody>
</table>
```
Javascript
---
```javascript
$('.table').checkAll({
    masterCheckbox: '.check-all',
    otherCheckboxes: '.check',
    highlightElement: {
        active: true,
        elementClass: 'tr',
        highlightClass: 'highlight'
    }
});  
```