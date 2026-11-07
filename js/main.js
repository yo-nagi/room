document.addEventListener('DOMContentLoaded', () => {

	// ==========================================
	// 1. 水色フワフワのマウスカーソル演出 (.cursor)
	// ==========================================
	const cursor = document.querySelector('.cursor');
	if (cursor) {
		document.addEventListener('mousemove', (e) => {
			// マウスの位置に合わせてカーソル要素を移動させる
			cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
		});
	}



	// ==========================================
	// 3. 実績メニューのアコーディオン開閉コントロール（CSS連動版）
	// ==========================================
	const worksMenu = document.querySelector('.has-sub > a');
	const subNav = document.querySelector('.sub-nav');

	if (worksMenu && subNav) {
		worksMenu.addEventListener('click', (e) => {
			e.preventDefault();

			// 💡 JSはクラスを切り替える「トリガー」にするだけ！
			subNav.classList.toggle('open');

			// スクロール処理
			const targetId = 'works';
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop,
					behavior: 'smooth'
				});
			}
		});
	}

	// ==========================================
	// 4. スクロールで下からふわっと浮き出る演出 (.fadeUpTrigger)
	// ==========================================
	const fadeUpTriggers = document.querySelectorAll('.fadeUpTrigger');

	const options = {
		root: null, // 画面全体を基準にする
		rootMargin: '0px',
		threshold: 0.1 // 10%見えたら実行
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// 画面内に入ったら「visible」クラスをつけてCSSアニメーションを発動
				entry.target.classList.add('visible');
			}
		});
	}, options);

	fadeUpTriggers.forEach(trigger => {
		observer.observe(trigger);
	});


});

const items = document.querySelectorAll('.cooking-gallery .item[data-text]');
const note = document.querySelector('.photo-note');
const noteText = document.querySelector('.photo-note p');
const closeBtn = document.querySelector('.photo-note-close');

items.forEach(item => {
	item.addEventListener('click', () => {
		if (!item.dataset.text) return;

		noteText.textContent = item.dataset.text;
		note.style.display = 'block';
	});
});

if (closeBtn && note) {
	closeBtn.addEventListener('click', () => {
		note.style.display = 'none';
	});
}

/* =========================
   イラスト NOTE表示
========================= */

const illustItems = document.querySelectorAll(".illust-item");
const illustNote = document.querySelector(".illust-note");
const illustNoteTitle = document.querySelector(".illust-note-inner h3");
const illustNoteText = document.querySelector(".illust-note-inner p");
const illustNoteClose = document.querySelector(".illust-note-close");


if (illustItems.length && illustNote) {

	illustItems.forEach(item => {

		item.addEventListener("click", function () {

			illustNoteTitle.textContent = this.dataset.title;
			illustNoteText.textContent = this.dataset.text;

			illustNote.style.display = "block";

		});

	});


	if (illustNoteClose) {

		illustNoteClose.addEventListener("click", function () {

			illustNote.style.display = "none";

		});

	}


	illustNote.addEventListener("click", function (e) {

		if (e.target === illustNote) {
			illustNote.style.display = "none";
		}

	});

}

let headerPath = "header.html";

if (location.pathname.includes("/essay/") ||
	location.pathname.includes("/yuhi-beer/") ||
	location.pathname.includes("/picture_books/")) {
	headerPath = "../header.html";
}

fetch(headerPath)
	.then(response => response.text())
	.then(data => {
		document.getElementById("header").innerHTML = data;

		const headerLinks = document.querySelectorAll("#header a");

		if (location.pathname.includes("/picture_books/") ||
			location.pathname.includes("/essay/") ||
			location.pathname.includes("/yuhi-beer/")) {

			headerLinks.forEach(link => {
				const href = link.getAttribute("href");

				if (href && !href.startsWith("#") && !href.startsWith("../")) {
					link.setAttribute("href", "../" + href);
				}
			});
		}

		// ハンバーガーメニュー
		const hamburger = document.getElementById('sp-hamburger');
		const spNav = document.querySelector('.sp-nav');

		if (hamburger && spNav) {
			hamburger.addEventListener('click', () => {
				hamburger.classList.toggle('active');
				spNav.classList.toggle('active');
			});
		}


		// わたしの世界 アコーディオン
		const worksMenu = document.querySelector('.has-sub > a');
		const subNav = document.querySelector('.sub-nav');

		if (worksMenu && subNav) {
			worksMenu.addEventListener('click', (e) => {
				e.preventDefault();
				subNav.classList.toggle('open');
			});
		}

	});

let footerPath = "footer.html";

if (location.pathname.includes("/essay/") ||
	location.pathname.includes("/yuhi-beer/") ||
	location.pathname.includes("/picture_books/")) {
	footerPath = "../footer.html";
}

fetch(footerPath)
	.then(response => response.text())
	.then(data => {
		document.getElementById("footer").innerHTML = data;

		const footerLinks = document.querySelectorAll("#footer a");

		if (location.pathname.includes("/picture_books/") ||
			location.pathname.includes("/essay/") ||
			location.pathname.includes("/yuhi-beer/")) {

			footerLinks.forEach(link => {
				const href = link.getAttribute("href");

				if (href && !href.startsWith("#") && !href.startsWith("../")) {
					link.setAttribute("href", "../" + href);
				}
			});
		}

		// フォルダ内ページの画像パス調整
		const footerImages = document.querySelectorAll("#footer img");

		if (location.pathname.includes("/picture_books/") ||
			location.pathname.includes("/essay/") ||
			location.pathname.includes("/yuhi-beer/")) {

			footerImages.forEach(img => {
				const src = img.getAttribute("src");

				if (src && !src.startsWith("../")) {
					img.setAttribute("src", "../" + src);
				}
			});
		}

		// 青い鳥
		const pageTopBtn = document.getElementById('page-top');

		if (pageTopBtn) {
			window.addEventListener('scroll', () => {
				if (window.scrollY > 100) {
					pageTopBtn.classList.add('visible');
				} else {
					pageTopBtn.classList.remove('visible');
				}
			});
		}
	});

// エッセイ続きを読む
const essayMoreBtn = document.querySelector('.essay-more-btn');
const essayMore = document.querySelector('.essay-more');

if (essayMoreBtn && essayMore) {
	essayMoreBtn.addEventListener('click', () => {
		essayMore.classList.add('open');
		essayMoreBtn.style.display = 'none';
	});
}

