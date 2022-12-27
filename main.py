# Simple four function calculator
# Written in Python with PyQT module

import sys
from PyQt6.QtWidgets import (
        QApplication,
        QGridLayout,
        QLineEdit,
        QMainWindow,
        QPushButton,
        QVBoxLayout,
        QWidget,
        )

# Initializing the calculator's application GUI
app = QApplication([])
screen_layout = QVBoxLayout()
button_layout = QGridLayout()
window = QWidget()
window.setWindowTitle("Calculator")


# Running the application
window.show()
sys.exit(app.exec())
