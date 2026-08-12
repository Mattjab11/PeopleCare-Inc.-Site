/* ============================================================
   PeopleCare — SITE RENDER (do not edit — edit site-data.js instead)
   ============================================================
   Reads PC_SITE from site-data.js and fills in the parts of each
   page that come from that shared data: the nav menu, phone/
   address, and (on the pages that have them) the board, staff,
   impact stats, tally, testimonials, and events. Safe to include
   on every page — it only touches elements that actually exist.
   ============================================================ */
(function () {
    if (typeof PC_SITE === "undefined") return;

    function currentPage() {
        var path = window.location.pathname.split("/").pop();
        return path === "" ? "index.html" : path;
    }

    // ---------- Nav menu ----------
    var navList = document.getElementById("navList");
    if (navList) {
        var here = currentPage();
        navList.innerHTML = PC_SITE.nav.map(function (item) {
            var active = item.href === here ? ' style="color:var(--primary,#5B9BD5);"' : "";
            return '<li><a href="' + item.href + '"' + active + ">" + item.label + "</a></li>";
        }).join("");
    }

    // ---------- Phone / address, anywhere tagged with data-pc ----------
    document.querySelectorAll('[data-pc="phone-text"]').forEach(function (el) {
        el.textContent = PC_SITE.phone;
    });
    document.querySelectorAll('[data-pc="phone-href"]').forEach(function (el) {
        el.setAttribute("href", PC_SITE.phoneHref);
    });
    document.querySelectorAll('[data-pc="address-text"]').forEach(function (el) {
        el.textContent = PC_SITE.address;
    });

    // ---------- Avatar helper (colored initials until a real photo is set) ----------
    function avatarSrc(name, photo, bg) {
        if (photo) return photo;
        return "https://ui-avatars.com/api/?name=" + encodeURIComponent(name) +
            "&background=" + bg + "&color=fff&size=200&bold=true";
    }

    // ---------- Impact stats ----------
    var impactGrid = document.getElementById("impactGrid");
    if (impactGrid && PC_SITE.impactStats) {
        impactGrid.innerHTML = PC_SITE.impactStats.map(function (s) {
            return '<div class="impact-card"><div class="impact-number">' + s.number +
                '</div><div class="impact-label">' + s.label + "</div></div>";
        }).join("") +
            '<div class="impact-card placeholder"><div class="impact-number">\u2014</div>' +
            '<div class="impact-label">Add another stat in site-data.js</div></div>';
    }

    // ---------- Running tally ----------
    var tallySection = document.getElementById("tallySection");
    var tallyBox = document.getElementById("tallyBox");
    if (tallySection && tallyBox) {
        if (PC_SITE.showTally && PC_SITE.tally) {
            tallyBox.innerHTML = '<div class="impact-number">' + PC_SITE.tally.number +
                '</div><div class="impact-label">' + PC_SITE.tally.label + '</div>' +
                '<p class="tally-note">Updated by hand periodically \u2014 not a live counter. Set showTally to false in site-data.js to hide this section.</p>';
            tallySection.style.display = "";
        } else {
            tallySection.style.display = "none";
        }
    }

    // ---------- Board of Directors ----------
    var boardGrid = document.getElementById("boardGrid");
    if (boardGrid && PC_SITE.board) {
        boardGrid.innerHTML = PC_SITE.board.map(function (p) {
            return '<div class="person-card"><img class="person-avatar" src="' +
                avatarSrc(p.name, p.photo, "5B9BD5") + '" alt="' + p.name + '">' +
                '<div class="person-name">' + p.name + '</div>' +
                '<div class="person-title">' + p.title + "</div></div>";
        }).join("");
    }

    // ---------- Staff ----------
    var staffGrid = document.getElementById("staffGrid");
    if (staffGrid && PC_SITE.staff) {
        staffGrid.innerHTML = PC_SITE.staff.map(function (p) {
            var bio = p.bio ? '<div class="person-bio">' + p.bio + "</div>" : "";
            return '<div class="person-card"><img class="person-avatar" src="' +
                avatarSrc(p.name, p.photo, "4A7FB8") + '" alt="' + p.name + '">' +
                '<div class="person-name">' + p.name + '</div>' +
                '<div class="person-title">' + p.title + "</div>" + bio + "</div>";
        }).join("");
    }

    // ---------- Testimonials ----------
    var testimonialGrid = document.getElementById("testimonialGrid");
    if (testimonialGrid && PC_SITE.testimonials) {
        testimonialGrid.innerHTML = PC_SITE.testimonials.map(function (t) {
            var tag = t.sample ? '<span class="sample-tag">Sample</span>' : "";
            return '<div class="testimonial-card">' + tag +
                '<p class="testimonial-quote">' + t.quote + '</p>' +
                '<p class="testimonial-attribution">\u2014 ' + t.attribution + "</p></div>";
        }).join("");
    }

    // ---------- Upcoming events ----------
    var eventsList = document.getElementById("eventsList");
    if (eventsList && PC_SITE.events) {
        eventsList.innerHTML = PC_SITE.events.map(function (e) {
            return '<div class="event-card"><div class="event-date"><span class="month">' + e.month +
                '</span><span class="day">' + e.day + '</span></div>' +
                '<div class="event-info"><h3>' + e.title + '</h3><p>' + e.details + "</p></div></div>";
        }).join("");
    }

    // ---------- Donate button / QR (Donations page) ----------
    var donateBtn = document.getElementById("donateNowBtn");
    var qrImg = document.getElementById("giveQrImg");
    if (donateBtn && PC_SITE.donateUrl) {
        donateBtn.setAttribute("data-connected", "true");
        var url = PC_SITE.donateUrl;
        donateBtn.onclick = function () { window.location.href = url; };
        if (qrImg) {
            qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(url);
        }
    }
})();
