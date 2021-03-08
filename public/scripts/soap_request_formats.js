function soap() {
    var xmlhttp = new XMLHttpRequest();
   
    //replace second argument with the path to your Secret Server webservices
    xmlhttp.open('POST', '/secretserver/webservices/sswebservice.asmx', true);
   
    //create the SOAP request
    //replace username, password (and org + domain, if necessary) with the appropriate info
    var strRequest =
        `<?xml version="1.0" encoding="utf-8"?>
        <soap:Envelope
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:xsd="http://www.w3.org/2001/XMLSchema"
            xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
                <Authenticate xmlns="urn:thesecretserver.com">
                    <username>username</username>
                    <password>password</password>
                    <organization></organization>
                    <domain></domain>
                </Authenticate>
            </soap:Body>
        </soap:Envelope>`;

    //specify request headers
    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlhttp.setRequestHeader('SOAPAction', '"urn:thesecretserver.com/Authenticate"');

    //FOR TESTING: display results in an alert box once the response is received
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            alert(xmlhttp.responseText);
        }
    };

    //send the SOAP request
    xmlhttp.send(strRequest);
};

//build & send the request when the page loads
window.onload = function() {
    soap();
};


function soap() {
    var xmlhttp = new XMLHttpRequest();
   
    //replace second argument with the path to your Secret Server webservices
    xmlhttp.open('POST', '/secretserver/webservices/sswebservice.asmx', true);
   
    //create the SOAP request
    //replace username, password (and org + domain, if necessary) with the appropriate info
    var strRequest =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema"" ' +
            'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soap:Body>' +
                '<Authenticate xmlns="urn:thesecretserver.com">' +
                    '<username>username</username>' +
                    '<password>password</password>' +
                    '<organization></organization>' +
                    '<domain></domain>' +
                '</Authenticate>' +
            '</soap:Body>' +
        '</soap:Envelope>';

    //specify request headers
    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlhttp.setRequestHeader('SOAPAction', '"urn:thesecretserver.com/Authenticate"');

    //FOR TESTING: display results in an alert box once the response is received
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            alert(xmlhttp.responseText);
        }
    };

    //send the SOAP request
    xmlhttp.send(strRequest);
};

//build & send the request when the page loads
window.onload = function() {
    soap();
};


var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        if (oXHR.readyState == 4)               // REQUEST COMPLETED.
            showTheList(this.responseXML);      // ALL SET. NOW SHOW XML DATA.
    }

    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "../../library/library.xml", true);      // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
    oXHR.send();

    function showTheList(xml) {
        var divBooks = document.getElementById('books');      // THE PARENT DIV.
        var Book_List = xml.getElementsByTagName('List');       // THE XML TAG NAME.

        for (var i = 0; i < Book_List.length; i++) {

            // CREATE CHILD DIVS INSIDE THE PARENT DIV.
            var divLeft = document.createElement('div');
            divLeft.className = 'col1';
            divLeft.innerHTML = Book_List[i].getElementsByTagName("BookName")[0].childNodes[0].nodeValue;

            var divRight = document.createElement('div');
            divRight.className = 'col2';
            divRight.innerHTML = Book_List[i].getElementsByTagName("Category")[0].childNodes[0].nodeValue;

            // ADD THE CHILD TO THE PARENT DIV.
            divBooks.appendChild(divLeft);
            divBooks.appendChild(divRight);
        }
    }