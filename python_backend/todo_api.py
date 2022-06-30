from flask import Flask, render_template, redirect, g, request, url_for, jsonify, Response
from flask_cors import CORS
import sqlite3
import urllib
import json

DATABASE = 'todolist.db'

app = Flask(__name__)
CORS(app)
app.config.from_object(__name__)

@app.route("/api/items")
def get_items():
    db = get_db()
    cur = db.execute('SELECT entry_id, what_to_do, due_date, status FROM entries')
    entries = cur.fetchall()
    tdlist = [dict(entry_id=row[0], what_to_do=row[1], due_date=row[2], status=row[3], list_id=row[4])
              for row in entries]
    response = Response(json.dumps(tdlist),  mimetype='application/json')
    return response

@app.route("/api/items")
def get_items_for_list():
    db = get_db()
    args = request.args
    list_id = args.get('list_id')
    cur = db.execute('SELECT entry_id, what_to_do, due_date, status FROM entries WHERE list_id = ' + list_id).fetchall()
    entries = cur.fetchall()
    tdlist = [dict(entry_id=row[0], what_to_do=row[1], due_date=row[2], status=row[3], list_id=row[4])
              for row in entries]
    response = Response(json.dumps(tdlist),  mimetype='application/json')
    return response
    
@app.route("/api/lists")
def get_lists():
    db = get_db()
    cur = db.execute('SELECT list, name FROM lists')
    entries = cur.fetchall()
    tdlist = [dict(list=row[0], name=row[1])
              for row in entries]
    response = Response(json.dumps(tdlist),  mimetype='application/json')
    return response

@app.route("/api/items", methods=['POST'])

def add_item():
    db = get_db()
    db.execute('insert into entries (what_to_do, due_date) values (?, ?)',
               [request.json['what_to_do'], request.json['due_date']])
    db.commit()
    return jsonify({"result": True})

@app.route("/api/lists", methods=['POST'])

def add_list():
    db = get_db()
    db.execute('insert into lists (name) values (?)',
               [request.json['name']])
    db.commit()
    return jsonify({"result": True})    

@app.route("/api/items/<item>", methods=['DELETE'])

def delete_item(item):
    db = get_db()
    db.execute("DELETE FROM entries WHERE what_to_do='"+item+"'")
    db.commit()
    return jsonify({"result": True})

@app.route("/api/lists/<list>", methods=['DELETE'])

def delete_list(list):
    db = get_db()
    db.execute("DELETE FROM lists WHERE what_to_do='"+list+"'")
    db.commit()
    return jsonify({"result": True})

@app.route("/api/items/<item>", methods=['PUT'])

def update_item(item):
    db = get_db()
    db.execute("UPDATE entries SET status='done' WHERE what_to_do='"+item+"'")
    db.commit()
    return jsonify({"result": True})

def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = sqlite3.connect(app.config['DATABASE'])
    return g.sqlite_db


@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'sqlite_db'):
        g.sqlite_db.close()


if __name__ == "__main__":
    app.run("0.0.0.0", port=5001)
