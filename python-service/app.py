



from flask import Flask, request, jsonify
import openai
import requests

app = Flask(__name__)

openai.api_key = 'openai_api_key_here' 

@app.route('/optimize_route', method=['POST'])

def optimize_route():
    data = request.get_json()
    from_location = data['from']
    to_location = data['to']
    
    # ai- based route optimization
    
    prompt = f"Suggest the most efficient route from {from_location} to {to_location} considering current traffic conditions and road closures."
    response = openai.Completion.create(
        engine = 'gpt-3.5-turbo',
        prompt=prompt,
        max_tokens=100,
    )
    
    return jsonify({
        'optimized_route': response.choices[0].text.strip()
    })


if __name__ == '__main__':
    app.run(debug=True, port=5000)