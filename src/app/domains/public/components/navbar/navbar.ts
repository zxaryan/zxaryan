import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isDarkMode = true;

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme !== 'light';
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  private applyTheme(): void {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('light', !this.isDarkMode);
    }
  }
  menuOpen = false;

toggleMenu(): void {
  this.menuOpen = !this.menuOpen;
}

closeMenu(): void {
  this.menuOpen = false;
}
}
