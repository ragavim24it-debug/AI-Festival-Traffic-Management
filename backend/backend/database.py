import sqlite3

DATABASE = "traffic.db"


def get_connection():
    connection = sqlite3.connect(DATABASE)
    connection.row_factory = sqlite3.Row
    return connection


def create_database():

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS traffic (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            road TEXT NOT NULL,
            vehicles INTEGER NOT NULL,
            speed REAL NOT NULL,
            traffic_level TEXT NOT NULL,
            delay INTEGER NOT NULL
        )
    """)

    connection.commit()
    connection.close()


def insert_traffic(
    road,
    vehicles,
    speed,
    traffic_level,
    delay
):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        INSERT INTO traffic
        (road, vehicles, speed, traffic_level, delay)
        VALUES (?, ?, ?, ?, ?)
    """, (
        road,
        vehicles,
        speed,
        traffic_level,
        delay
    ))

    connection.commit()
    connection.close()


def get_all_traffic():

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT * FROM traffic
        ORDER BY id DESC
    """)

    data = cursor.fetchall()

    connection.close()

    return [dict(row) for row in data]


if __name__ == "__main__":

    create_database()

    print("Database created successfully!")
