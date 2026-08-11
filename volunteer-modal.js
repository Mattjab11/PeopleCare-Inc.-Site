/* ============================================================
   PeopleCare — Volunteer Sign-Up Pop-Up
   Injects a floating "Volunteer" button + modal form on every
   page that includes this script. No backend required: when
   someone submits, it opens their email app with the details
   pre-filled and addressed to PeopleCare.

   TODO (PeopleCare staff): replace VOLUNTEER_EMAIL below with
   the real inbox this should land in.
   ============================================================ */
(function () {
    var VOLUNTEER_EMAIL = "volunteer@peoplecareinc.org"; // TODO: confirm real address

    var style = document.createElement("style");
    style.textContent = [
        "#pc-vol-btn{position:fixed;bottom:24px;right:24px;z-index:2000;",
        "background:var(--primary,#5B9BD5);color:#fff;border:none;",
        "padding:1rem 1.5rem;border-radius:50px;font-family:'Lato',sans-serif;",
        "font-weight:700;font-size:1rem;cursor:pointer;",
        "box-shadow:0 8px 25px rgba(0,0,0,0.25);display:flex;align-items:center;gap:0.5rem;",
        "transition:transform 0.25s ease, box-shadow 0.25s ease;}",
        "#pc-vol-btn:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,0.3);}",
        "@media (max-width:600px){#pc-vol-btn{right:14px;bottom:14px;padding:0.85rem 1.2rem;font-size:0.9rem;}}",

        "#pc-vol-overlay{position:fixed;inset:0;background:rgba(44,62,80,0.55);",
        "z-index:2100;display:none;align-items:center;justify-content:center;padding:1.25rem;}",
        "#pc-vol-overlay.open{display:flex;}",

        "#pc-vol-modal{background:#fff;border-radius:20px;max-width:480px;width:100%;",
        "max-height:90vh;overflow-y:auto;padding:2.25rem;position:relative;",
        "font-family:'Lato',sans-serif;box-shadow:0 25px 60px rgba(0,0,0,0.35);}",

        "#pc-vol-close{position:absolute;top:1rem;right:1.25rem;background:none;border:none;",
        "font-size:1.6rem;line-height:1;cursor:pointer;color:var(--text-light,#5A6C7D);}",
        "#pc-vol-close:hover{color:var(--primary,#5B9BD5);}",

        "#pc-vol-modal h2{color:var(--primary,#5B9BD5);font-size:1.6rem;margin-bottom:0.5rem;font-weight:700;}",
        "#pc-vol-modal p.pc-sub{color:var(--text-light,#5A6C7D);margin-bottom:1.5rem;font-size:0.98rem;}",

        "#pc-vol-form label{display:block;font-weight:600;color:var(--text-dark,#2C3E50);",
        "margin-bottom:0.35rem;font-size:0.9rem;}",
        "#pc-vol-form .pc-field{margin-bottom:1.1rem;}",
        "#pc-vol-form input, #pc-vol-form select, #pc-vol-form textarea{width:100%;",
        "padding:0.8rem 1rem;border:2px solid #E1E9F2;border-radius:10px;font-size:1rem;",
        "font-family:'Lato',sans-serif;color:var(--text-dark,#2C3E50);}",
        "#pc-vol-form input:focus, #pc-vol-form select:focus, #pc-vol-form textarea:focus{",
        "outline:none;border-color:var(--primary,#5B9BD5);}",
        "#pc-vol-form textarea{resize:vertical;min-height:80px;}",

        "#pc-vol-submit{width:100%;background:var(--primary,#5B9BD5);color:#fff;border:none;",
        "padding:1rem;border-radius:50px;font-size:1.05rem;font-weight:700;cursor:pointer;",
        "transition:background 0.25s ease;}",
        "#pc-vol-submit:hover{background:var(--primary-dark,#4A7FB8);}",

        "#pc-vol-fallback{margin-top:1rem;font-size:0.85rem;color:var(--text-light,#5A6C7D);text-align:center;}"
    ].join("");
    document.head.appendChild(style);

    var btn = document.createElement("button");
    btn.id = "pc-vol-btn";
    btn.type = "button";
    btn.innerHTML = "🤝 Volunteer With Us";
    document.body.appendChild(btn);

    var overlay = document.createElement("div");
    overlay.id = "pc-vol-overlay";
    overlay.innerHTML =
        '<div id="pc-vol-modal">' +
        '<button id="pc-vol-close" type="button" aria-label="Close">&times;</button>' +
        "<h2>Become a Volunteer</h2>" +
        '<p class="pc-sub">Tell us a bit about yourself and we\'ll follow up. The power of an hour starts here.</p>' +
        '<form id="pc-vol-form">' +
        '<div class="pc-field"><label for="pc-vol-name">Name *</label><input id="pc-vol-name" name="name" type="text" required></div>' +
        '<div class="pc-field"><label for="pc-vol-email">Email *</label><input id="pc-vol-email" name="email" type="email" required></div>' +
        '<div class="pc-field"><label for="pc-vol-phone">Phone</label><input id="pc-vol-phone" name="phone" type="tel"></div>' +
        '<div class="pc-field"><label for="pc-vol-interest">How would you like to help?</label>' +
        '<select id="pc-vol-interest" name="interest">' +
        "<option>Friendly Visitor</option>" +
        "<option>Driver Volunteer</option>" +
        "<option>Office / Transportation Coordination</option>" +
        "<option>Not sure yet — tell me more</option>" +
        "</select></div>" +
        '<div class="pc-field"><label for="pc-vol-message">Message</label><textarea id="pc-vol-message" name="message" placeholder="Availability, questions, anything else we should know"></textarea></div>' +
        '<button id="pc-vol-submit" type="submit">Send My Info</button>' +
        '<p id="pc-vol-fallback">This opens your email app addressed to PeopleCare. Prefer to talk? Call <a href="tel:7084421223" style="color:var(--primary,#5B9BD5);font-weight:700;">(708) 442-1223</a>.</p>' +
        "</form>" +
        "</div>";
    document.body.appendChild(overlay);

    function openModal() {
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
    }
    function closeModal() {
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }

    btn.addEventListener("click", openModal);
    overlay.querySelector("#pc-vol-close").addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal();
    });

    overlay.querySelector("#pc-vol-form").addEventListener("submit", function (e) {
        e.preventDefault();
        var name = document.getElementById("pc-vol-name").value.trim();
        var email = document.getElementById("pc-vol-email").value.trim();
        var phone = document.getElementById("pc-vol-phone").value.trim();
        var interest = document.getElementById("pc-vol-interest").value;
        var message = document.getElementById("pc-vol-message").value.trim();

        var subject = "Volunteer Interest: " + name;
        var body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + (phone || "(not provided)") + "\n" +
            "Interested in: " + interest + "\n\n" +
            "Message:\n" + (message || "(none)");

        var mailtoLink =
            "mailto:" + VOLUNTEER_EMAIL +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.location.href = mailtoLink;
        closeModal();
        e.target.reset();
    });
})();
