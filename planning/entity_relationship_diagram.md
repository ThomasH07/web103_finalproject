# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## Create the List of Tables

- `GameSession`
- `Round`
- `Song`
- `Guess`

## Add the Entity Relationship Diagram

### `GameSession` Table
| Column Name | Type | Description |
|---|---|---|
| session_id | integer | primary key |
| start_time | timestamp | The exact time the session began |
| end_time | timestamp | The exact time the session ended |
| total_score | integer | The final score for this session |
| amount_of_people | integer | Number of players in the session |

### `Round` Table
| Column Name | Type | Description |
|---|---|---|
| round_id | integer | primary key |
| session_id | integer | foreign key (references `GameSession.session_id`) |
| song_id | integer | foreign key (references `Song.song_id`) |
| question_type | text | e.g., "Guess Song Title", "Guess Artist" |
| is_correct | boolean | Was the final answer for this round correct? |
| time_taken | float | Total time in seconds for this round |
| amount_of_guesses | integer | Total guesses used in this round |

### `Song` Table
| Column Name | Type | Description |
|---|---|---|
| song_id | integer | primary key |
| title | text | The title of the song |
| artist | text | The name of the artist |
| album | text | The album the song belongs to |
| release_year | integer | The year the song was released |
| audio_clip_url | text | URL to the audio snippet |
| genre | text | The genre of the song (e.t. "Pop", "Rock") |

### `Guess` Table
| Column Name | Type | Description |
|---|---|---|
| guess_id | integer | primary key |
| round_id | integer | foreign key (references `Round.round_id`) |
| guessed_title | text | The title the user guessed |
| guessed_artist | text | The artist the user guessed |
| guess_time | timestamp | The exact time the guess was made |
| is_correct | boolean | Was this specific guess correct? |
